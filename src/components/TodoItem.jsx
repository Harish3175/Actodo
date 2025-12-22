import React from 'react'

const TodoItem = (props) => {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handeldelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }else
            {
                return true
            }
        })
        setActivityArr(temparr)
    }

  return (
    <div className='flex justify-between'>
      <p>{props.index+1}.{props.activity}</p>
      <button onClick={()=>handeldelete(props.id)} className='text-red-600'>Delete</button>
    </div>
  )
}

export default TodoItem
