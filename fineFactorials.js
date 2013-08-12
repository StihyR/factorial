function fineFactorials() {
  var	maxDecNumb = 9,
		maxDigit,
		factsArr = [],
		calcFactorial = function (number) {
			var i,
				factorial = 1
				
			if (number == 0)
				return factorial				
			
			for (i = 1; i <= number; i++)
				factorial *= i
			
			return factorial
		},
		maxSumLength = function () {
			var sumStrStep = maxDecNumb.toString(),
				sumStr = sumStrStep,
				factSumStep = factsArr[maxDecNumb],
				factSum = factSumStep
				
			while (true) {
				if (parseInt(sumStr) > factSum)
					return sumStr.length

				sumStr += sumStrStep
				factSum += factSumStep
			}
		},
		isFine = function (sumStr, sum)	{
			var i
			
			sum = sum.toString()
			for (i = 0; i <= maxDecNumb; i++)
				if (sumStr.split(i).length != sum.split(i).length)
					return false
			
			return true
		},
		aroundTree = function (level,branchStr,branchSum) {
			var i,
				subBranchStr,
				subBranchSum
				
			if (branchStr.length == maxDigit)
				return
				
			if (isFine(branchStr, branchSum))
				console.log(branchStr + ' : ' + branchSum)

			for (i = 0; i <= level; i++)  {
				subBranchStr = branchStr + i
				subBranchSum = branchSum + factsArr[i]
				aroundTree(i,subBranchStr,subBranchSum)
			}		
		},
		ini = function () {
			var i
			
			for (i = 0; i <= maxDecNumb; i++)
				factsArr.push(calcFactorial(i))
				
			maxDigit = maxSumLength()
			for (i = 1; i <= maxDecNumb; i++)
				aroundTree(i,i.toString(),factsArr[i])
		}
		
	ini();
}
fineFactorials()
