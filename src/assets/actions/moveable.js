export function moveable(node) {
  let mousePosition;
  let offset = [0, 0];
  let isDown = false;

  node.querySelector('[handle]').onmousedown = function (e) {
    isDown = true;
    offset = [node.offsetLeft - e.clientX, node.offsetTop - e.clientY];
  };
  node.querySelector('[handle]').onmouseup = function () {
    isDown = false;
  };
  document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      node.style.left = mousePosition.x + offset[0] + 'px';
      node.style.top = mousePosition.y + offset[1] + 'px';
    }
  });
}
