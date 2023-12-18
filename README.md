# TypeScript
### Lv5

- Lv4의 과제에서 Redux를 react-query로 리팩토링 합니다.

### Keyword

query

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
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┗ 📜Form.tsx
 ┃ ┃ ┗ 📂Todo
 ┃ ┃ ┃ ┗ 📜Todo.tsx
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
