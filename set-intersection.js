function setIntersection(set1, set2)
{
	var intersection = [];

	for (var i = 0; i < set1.length; i++)
	{
		if(set2.includes(set1[i])) intersection.push(set1[i]);
	}

	return intersection;
}

module.exports = setIntersection;