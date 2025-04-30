import NodeComponent, { NodeComponentProps } from "./node"

const Timeline = (props: NodeComponentProps) => {
    return (
        <NodeComponent posts={props.posts} />
    )
} 

export default Timeline