/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof(bytes) !== "number" || bytes < 0)
    return false
  let types = ['B', 
  'KB',
  'MB',
  'GB', 
  'TB', 
  'PB', 
  'EB']
  for (let type of types) {
    if (bytes < 1024 || type === 'EB') {
        return bytes.toFixed(2) + ' ' + type
    }
    bytes /= 1024
  }
  }