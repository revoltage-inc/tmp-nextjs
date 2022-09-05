declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>
  export { ReactComponent }
  export default ReactComponent
}
