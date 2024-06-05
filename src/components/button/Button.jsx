

import React from 'react'

const Button = ({txt,style,onClick}) => {
  return (
		<>
			<button onClick={onClick} className={style}>
				{txt}
			</button>
		</>
	);
}

export default Button
