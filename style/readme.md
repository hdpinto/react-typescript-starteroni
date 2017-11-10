## CDN scss syntax guide (_Work In Progress_)
- See [SMACSS](https://smacss.com/book/)

### Folder Structure
```
style
|   readme.md
└───dist
|   |   main.css        // compiled file
└───src
    |   _cdn.scss       // combines base/layout/module/state/theme
    |   _settings.scss  // main project settings
    |   _shame.scss     // bad or out-of-form scss, to be refactored
    |   main.scss       // main compiled file
    |
    └───base
    |   └───components
    |   |   _base.scss
    |
    └───layout
    |   └───components
    |   |   _layout.scss
    |
    └───module
    |   └───components
    |   |   _module.scss
    |
    └───state
    |   └───components
    |   |   _state.scss
    |
    └───theme
        └───components
        |   _theme.scss
```
### Rules
- [Base Rules](https://smacss.com/book/type-base)
- [Layout Rules](https://smacss.com/book/type-layout)
- [Module Rules](https://smacss.com/book/type-module)
- [State Rules](https://smacss.com/book/type-state)
    - [Changing State](https://smacss.com/book/state)
- [Theme Rules](https://smacss.com/book/type-theme)

