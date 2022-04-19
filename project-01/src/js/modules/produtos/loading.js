export function loading () {

  const root = document.getElementById('root');
  root.innerHTML = `
    <div style="width: 100vw; position: absolute; left: 0; display: flex; top: 120px; justify-content: center;">
      <img src="/src/images/loading.gif" style="width: 300px;"/> 
    </div>
  ` 
};
