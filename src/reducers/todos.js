const initialSate = {
	data: []
}

const todos = (state = initialSate, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				...state,
				data: [...state.data, {
					id: action.id,
					text: action.text
				}]
			}

		case 'DELETE_TODO':
			const todos = state.data.filter(todo => todo.id !== action.id)
			return {
				...state,
				data: todos
			}

		default:
			return state
	}
}

export default todos