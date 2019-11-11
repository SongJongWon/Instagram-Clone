# What I Learned
1. Instagram UI

### 2019/11/06
- react-navigation 3.0 문제
    - TabNavigator가 deprecated되어서 createBottomTabNavigator 또는 createMaterialTopTabNavigator를 사용해야 합니다.
        - 'react-navigation' 대신 'react-navigation-tabs' 사용
    - createBottomTabNavigator은 더 이상 swipeEnabled와 animationEnabled를 지원하지 않습니다.
        - createMaterialTopTabNavigator 사용
    - 'createAppContainer'를 통해 감싸주어야 됩니다.
