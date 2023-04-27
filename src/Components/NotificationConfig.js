import PushNotification from "react-native-push-notification"

class NotificationManager {

    // Configuração orientada pela documentação do React Native Push Notification
    // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);

                // Função de processamento da notificação 
                // Chamada quando uma notificação é recebida ou aberta
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
        })
    }

    // É aqui que nossa notificação para o Android é construida
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            channelId: "my-channel",
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    // Fução que exibe a notificação
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Propriedades do Android */
            ...this.buildAndroidNotification(id, title, message, data, options),

            /* Propriedades do Android e iOS */
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    // Função que cancela todas notiificações e limpa as que estão no centro de notificações
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "my-channel", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                vibrate: true,
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }

}

export const Notification = new NotificationManager();