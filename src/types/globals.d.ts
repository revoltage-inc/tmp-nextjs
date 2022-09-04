declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>
  export { ReactComponent }
  export default ReactComponent
}
