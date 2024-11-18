function Error({ Todo }) {
  return <>{Todo.length === 0 && <h2>Todo not avaliable</h2>}</>;
}

export default Error;
