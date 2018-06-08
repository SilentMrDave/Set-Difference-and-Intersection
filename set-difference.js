function setDifference(set1, set2)
{
	var difference = [];

	for (var i = 0; i < set1.length; i++)
	{
		if(!set2.includes(set1[i])) difference.push(set1[i]);
	}

	for (var i = 0; i < set2.length; i++)
	{
		if(!set1.includes(set2[i])) difference.push(set2[i]);
	}
	return difference;
}

module.exports = setDifference;