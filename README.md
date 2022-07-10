# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/XeBvGpPXOTneRHWb2AaWSY4gpSQuKK

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/5O4g7lKLeilZjs49BURqMtLLg7f35P

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/kvq3W90bv4A0XnZQ9y3NPfWO5xYpjF

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/5O4g7lKLeilZjs49BURqMtLLg7f35P
