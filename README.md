# Проект по предмету "Веб программирование"

## Локальная установка и запуск

> **Note**: Для локального запуска приложения необходимо установить [docker и docker-compose](https://docs.docker.com/desktop/install/mac-install/).

1. Скопируйте файл `example.env` в `.env` с помощью команды

    ```bash
    cp example.env .env
    ```

2. Создайте docker-контейнеры приложения с помощью команды

    ```bash
    docker-compose -f docker-compose.yaml build
    ```

3. Запустите docker-контейнеры приложения с помощью команды

    ```bash
    docker-compose -f docker-compose.yaml up
    ```

4. После запуска контейнеров должно выводится следующее сообщение

    ```bash
    Сервер запущен на http://127.0.0.1:3000
    ```

    Перейдите по данной ссылке.

5. Чтобы остановить контейнеры нажмите `Ctrl + C`

6. Чтобы войти в среду контейнера `NodeJS` приложения откройте новую вкладку терминала и введите команду:

    ```bash
    docker exec -it node_js_web_app /bin/bash
    ```

    Для выхода из среды введите `exit`
