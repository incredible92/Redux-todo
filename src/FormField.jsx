const FormField = () => {
    const handleSubmit = () => { }
  
    return (
      <form className="FormInput" onSubmit={handleSubmit}>
        <span className="add">Add a new todo:</span>
        <input placeholder="Enter task and press Enter" type="text" />
      </form>
    )
  }

  export default FormField;