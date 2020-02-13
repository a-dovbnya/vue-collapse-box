# vue-collapse-box
Компонент collapse-box используется для анимационного открытия скрытого блока

## Пример
```
<template>
    <collapse-box :open="isActive" :duration="0.75">
        <div class="collapse-block__body">
            Some Content
        </div>
    </collapse-box>
</template>
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
