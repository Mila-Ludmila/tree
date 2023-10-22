
document.querySelectorAll('ul > li > ul > li > ul').forEach(sublist => {
  sublist.style.display = 'none';
});

document.querySelectorAll('ul > li > ul').forEach(item => {
  item.addEventListener('click', () => {
      const sublist = item.querySelector('ul');
      if (sublist) {
          sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
      }
  });
});