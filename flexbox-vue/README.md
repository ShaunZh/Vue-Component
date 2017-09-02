# flexbox-vue

> A Vue Component to flexbox

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# package
npm run prod
```

## Usage 
Install it via npm:
- `npm install -S flexbox-vue`

## Example 
1. Global import 
```
import Flexbox from 'flexbox-vue'
Vue.use(Flexbox);
```

2. Use it
```
<FlexboxContainer orient="vertical">
    <FlexboxItem grow="1">
      <p>demo1</p>
    </FlexboxItem>
    <FlexboxItem>
      <p>demo2</p>
    </FlexboxItem>
</FlexboxContainer>
```

## Props

**FlexboxContainer**
  - gutter
  Spacing between items, Unit is px
    - type: Number,
    - default: 8 
  - orient (flex-direction)
    - type: String,
    - default: 'horizontal'
    - options: 'horizontal' || 'vertical'
  - justify: 
    - type: String
    - default: 'flex-start'
    - options: 'flex-start' || 'flex-end' || 'center' || 'space-between' || 'space-around'
  - align:
    - type: String
    - default: flex-start
    - options: 'flex-start' || 'flex-end' || 'center' || 'baseline' || 'stretch'
    
**FlexboxItem**
  - grow (flex-grow)
    - type: Number
    - default: 0
  - shrink (flex-shrink)
    - type: Number
    - default: 1
  - basis (flex-basis)
    - type: Number | String
    - default: 'auto'
    - options: <length> | 'auto'
  - order (order)
    - type: Number
    - default: 0
 