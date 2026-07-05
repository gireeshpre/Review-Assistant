export default class CommonUtils {

    static generateRandomNumber() {

        return Math.floor(Math.random() * 10000);

    }

    static generateRandomEmail() {

        return `user${Date.now()}@gmail.com`;

    }

    static generateRandomName() {

        return `User${Math.floor(Math.random()*1000)}`;

    }

    static getCurrentDate() {

        return new Date().toLocaleDateString();

    }

    static getCurrentTime() {

        return new Date().toLocaleTimeString();

    }

}