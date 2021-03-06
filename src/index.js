import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

  function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var NewIcon = new Image();
    NewIcon.src = Icon;
    element.appendChild(NewIcon);

    return element;
  }

  document.body.appendChild(component());