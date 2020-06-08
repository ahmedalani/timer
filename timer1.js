/* eslint-disable */
const alarmsFromNode = process.argv.slice(2)

for (let i = 0; i < alarmsFromNode.length; i++) {
  const alarm = parseInt(alarmsFromNode[i]);
  if (alarm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('beep❗️')
    }, 1000 * alarm);
  } else return;
}
