export class Init{
	load(){
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
			console.log('No Todos found');
			var todos = [
			{
		  text: 'Pickup kids at school.'
	  		},
		  {
		  text : 'Meeting wife at hofplein?'
		
	  },
		  {
		  text: 'Complete Angular2'
	  }
		  
			];
			
			localStorage.setItem('todos', JSON.stringify(todos));
			console.log(todos);
			return;
		}else{
			console.log('Found todo list');
		}
	}
}