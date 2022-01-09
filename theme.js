window.onload = pageLoad;
function pageLoad() {
  let lightBack = document.querySelectorAll('.lightBack');
  let stepMain = document.querySelector('.stepMain__body');
  let stepMainHead = document.querySelector('h1');
  let linkTag = document.querySelectorAll('a');
  let indexClass = document.querySelectorAll('.list-item>.title');
  let indexClassSelected = document.querySelector('.active>.title');
  let stepMainDiv = document.querySelector('.stepMain__btn-inner');
  let codeBackTick = document.querySelectorAll('code');
  let header = document.querySelector('.ant-layout-header');
  let blockquote = document.querySelector('blockquote');
  let blockquoteString = document.querySelectorAll('blockquote>p');

  for (let i = 0; i < lightBack.length; i++) {
    lightBack[i].style.backgroundColor = '#282a36';
  }

  for (let i = 0; i < linkTag.length; i++) {
    linkTag[i].style.color = '#ff79c6';
  }

  for (let i = 0; i < indexClass.length; i++) {
    indexClass[i].style.backgroundColor = '#282a36';
    indexClass[i].style.setProperty('color', '#f5f5f5', 'important');
  }
  for (let i = 0; i < codeBackTick.length; i++) {
    codeBackTick[i].style.backgroundColor = '#44475a';
    codeBackTick[i].style.color = '#ff79c6';
    codeBackTick[i].style.borderRadius = '1rem';
    codeBackTick[i].style.fontWeight = 'bold';
  }

  for (let i = 0; i < blockquoteString.length; i++) {
    blockquoteString[i].style.color = '#f8f8f2';
  }

  stepMain.style.backgroundColor = '#282a36';
  stepMain.style.color = '#f5f5f5';
  stepMainHead.style.color = '#bd93f9';
  indexClassSelected.style.setProperty('color', '#ff79c6', 'important');
  stepMainDiv.style.backgroundColor = '#282a36';
  header.style.backgroundColor = '#282a36';
  header.style.backgroundColor = '#282a36';
  blockquote.style.background = '#44475a';
}

pageLoad();
// for (let i = 0; i < target.length; i++) {
//   target[i].style.fontSize = '1.2rem'; // 코드 문자의 크기를 지정하는 부분
//   target[i].style.fontWeight = 'bold'; // 코드의 볼드체를 지정하는 부분
// }
// document.querySelector("CodeMirror, .CodeMirror-gutters) {
//   background-color: #282a36 !important;
//   color: #f8f8f2 !important;
//   border: none;
// }
// .cm-s-dracula .CodeMirror-gutters { color: #282a36; }
// .cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
// .cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }
// .cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
// .cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
// .cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
// .cm-s-dracula span.cm-comment { color: #6272a4; }
// .cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }
// .cm-s-dracula span.cm-number { color: #bd93f9; }
// .cm-s-dracula span.cm-variable { color: #50fa7b; }
// .cm-s-dracula span.cm-variable-2 { color: white; }
// .cm-s-dracula span.cm-def { color: #50fa7b; }
// .cm-s-dracula span.cm-operator { color: #ff79c6; }
// .cm-s-dracula span.cm-keyword { color: #ff79c6; }
// .cm-s-dracula span.cm-atom { color: #bd93f9; }
// .cm-s-dracula span.cm-meta { color: #f8f8f2; }
// .cm-s-dracula span.cm-tag { color: #ff79c6; }
// .cm-s-dracula span.cm-attribute { color: #50fa7b; }
// .cm-s-dracula span.cm-qualifier { color: #50fa7b; }
// .cm-s-dracula span.cm-property { color: #66d9ef; }
// .cm-s-dracula span.cm-builtin { color: #50fa7b; }
// .cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

// .cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
// .cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }
