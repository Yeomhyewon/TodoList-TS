# TypeScript
### Lv3

- json-server를 추가
- Todo를 Create, Delete, Update(완료/취소),  Read(From Json-server)가 가능

### Keyword

DB

### File
```
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┗ 📜Form.tsx
 ┃ ┃ ┗ 📂Todo
 ┃ ┃ ┃ ┗ 📜Todo.tsx
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜configStore.ts
 ┃ ┃ ┗ 📂modules
 ┃ ┃ ┃ ┗ 📜todosSlice.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜todo.ts
 ┃ ┣ 📜App.test.tsx
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┗ 📜setupTests.ts
 ┣ 📜.gitignore
 ┣ 📜db.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

### Components
#### Form
- Todo를 추가할 수 있는 입력 양식을 적어놓은 컴포넌트

#### Todo
- Todo를 삭제하거나 완료, 취소를 할 수 있는 컴포넌트
