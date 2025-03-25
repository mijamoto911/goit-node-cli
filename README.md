### goit-node-cli

# Contact Manager CLI

- Цей проєкт — це простий менеджер контактів, який працює з командного рядка. Ви можете переглядати, додавати, отримувати та видаляти контакти, які зберігаються у форматі JSON.

### 📁 Структура проєкту

```bash

src/
├── db/
│ └── contacts.json # Файл збереження контактів
├── contacts.js # Основна логіка роботи з контактами
└── index.js # CLI-інтерфейс з Commander
```

### ⚙️ Встановлення

- Клонуйте репозиторій:

```bash
git clone https://github.com/your-username/contact-manager-cli.git
cd contact-manager-cli
```

- Встановіть залежності:

```bash
npm install
```

🚀 Використання
Використовуйте командний рядок для виконання наступних дій:

- 📋 Список усіх контактів

```bash

node src/index.js --action list
```

🔍 Отримати контакт за ID

```bash
node src/index.js --action get --id <ID>
```

➕ Додати новий контакт

```bash
node src/index.js --action add --name "Ім'я" --email "email@example.com" --phone "123-456-789"
```

❌ Видалити контакт за ID

```bash
node src/index.js --action remove --id <ID>
```

📌 Параметри

- Ключ Опис
  --action, -a Дія: list, get, add, remove
  --contactId, -i Ідентифікатор контакту
  --name, -n Ім'я контакту
  --email, -e Email контакту
  --phone, -p Номер телефону
  🛠 Приклад використання

```bash
node src/index.js -a add -n "Oleh Ivanchuk" -e "oleh@example.com" -p "380501234567"
```

📦 Залежності

```
commander
nanoid
Node.js API: fs/promises, path
```

🔐 Дані зберігаються локально у contacts.json.

- Автор: Eduard Schumacher Email: mijamoto911@gmail.com
