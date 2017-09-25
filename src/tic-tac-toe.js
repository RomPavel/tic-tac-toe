class TicTacToe {
    constructor() {

	this.turn=9;
	this.player='x';
	this.matrix  = [[0,0,0],[0,0,0],[0,0,0]];
    }

    getCurrentPlayerSymbol() {
    return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
	
	if(this.matrix[rowIndex][columnIndex]==0)
	{
	this.matrix[rowIndex][columnIndex]=(this.player=='x')?1:-1;
	this.player=(this.player=='x')?'o':'x';
	this.turn--;
	}
    }

    isFinished() {
    if(this.getWinner()!=null||this.isDraw()==true)
	return true;
	else return false;
    }

    getWinner() {

	var col1=0;
	var col2=0;
	
	for(var i=0; i<3; i++)
	  {
	   col1=0;
	   col2=0;
	    for(var j=0; j<3; j++)
		  {
	        col1+=this.matrix[i][j];
			col2+=this.matrix[j][i];
	      }
	  if(col1==3) return 'x';
	  else if(col1==-3) return 'o';
	  else if(col2==3) return 'x';
	  else if(col2==-3) return 'o';
	  }
	  
	  col1=0;
	  col2=0;
	  for(var i=0; i<3; i++)
	    {
		  col1+=this.matrix[i][i];
		  col2+=this.matrix[i][2-i];
	    }
	   if(col1==3) return 'x';
	  else if(col1==-3) return 'o';
	  else if(col2==3) return 'x';
	  else if(col2==-3) return 'o';
	  
	  else return null;
    }

    noMoreTurns() {
    if(this.turn==0) return true;
	else return false;
    }

    isDraw() {
    if(this.noMoreTurns()==true&&this.getWinner()==null)
      return true;
    else 
	  return false;	  
    }

    getFieldValue(rowIndex, colIndex) {

	if(this.matrix[rowIndex][colIndex]==1) return 'x';
	else if(this.matrix[rowIndex][colIndex]==-1) return 'o';
	else return null;
    }
}

module.exports = TicTacToe;
