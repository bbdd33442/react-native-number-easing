# react-native-number-easing
simple number easing component

# How to use
 ## Use in View
 ```javascript:
 render() {
    return (
      <View style={styles.container}>
        <NumberEasing value="999999"/>
      </View>
    );
  }
  ```
  ## NumberEasing
  | Property | Type | Default | Description |
  |-----------|--------|---------|--------------------------------------------|<br>
  | ease | `string` | quintInOut | animation type |<br>
  | speed | `string`| 2000 |  | animation execute time(millisecond) |<br>
  | value | `string` | 0 | number value |<br>

  ## NumberEasing组建属性说明
  | 属性名 | 类型 | 默认值 | 描述 |<br>
  |-----------|--------|---------|--------------------------------------------|<br>
  | ease | `string` | quintInOut | 动画类型 |<br>
  | speed | `string`| 2000 |  | 动画执行的时间(毫秒) |<br>
  | value | `string` | 0 | 数值 |<br>
