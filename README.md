# react-native-number-easing
simple number easing component

#How to use
 ##Use in View
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
  |-----------|--------|---------|--------------------------------------------|
  | ease | `string` | quintInOut | animation type |
  | speed | `string`| 2000 |  | animation execute time(millisecond) |
  | value | `string` | 0 | number value |

  ## NumberEasing组建属性说明
  | 属性名 | 类型 | 默认值 | 描述 |
  |-----------|--------|---------|--------------------------------------------|
  | ease | `string` | quintInOut | 动画类型 |
  | speed | `string`| 2000 |  | 动画执行的时间(毫秒) |
  | value | `string` | 0 | 数值 |
