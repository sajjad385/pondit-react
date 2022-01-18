import {useState} from "react";

const PostForm = ({handleCreate}) => {
    const [inputs,setInputs] = useState({})
    const handleSubmit = e =>{
        e.preventDefault()
        handleCreate(inputs)
    }

    const handleChange = e =>{
        const fieldName = e.target.name
        const fieldValue = e.target.value
        setInputs((values)=>({...values,[fieldName]:fieldValue}))
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className='col-6 mt-2'>
                        <input name='title' className='form-control' type="text" placeholder='Enter Post Title'
                               value={inputs.title || ''}
                               onChange={handleChange}/>
                    </div>
                    <div className='col-6 mt-2'>
                        <textarea name="body" id="" className='form-control' placeholder='Enter Post Description'
                                  value={inputs.body || ''}
                                  onChange={handleChange}/>
                    </div>
                    <div className='col-6 mt-2'>
                        <input name="date" type='date' className='form-control' placeholder='Enter Post Description'
                                  value={inputs.date || ''}
                                  onChange={handleChange}/>
                    </div>
                    <div className='col-12 mt-2'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}
export default PostForm