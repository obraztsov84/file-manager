import path from 'path';

export const getOnePath = (newPath) => {
  const common = /^[^\s]+$/
  const single = /^'(.+)'$/
  const double = /^"(.+)"$/
  if (newPath.match(double)) return path.resolve(newPath.trim().replace(double, '$1'))
  if (newPath.match(single)) return path.resolve(newPath.trim().replace(single, '$1'))
  if (newPath.match(common)) return path.resolve(newPath)
}