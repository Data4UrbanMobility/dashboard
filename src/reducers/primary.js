
		const initalState = [
			{
				coordinates:[
					[8.5446034,40.194516500000006],
					[8.4763534,52.197020900000005]]
				},
			{
				coordinates:[
					[8.5446034,52.194516500000006],
					[8.5437438,52.194518900000006],
					[8.5413435,52.19448310000001],
					[8.5397423,52.1944481],
					[8.5384442,52.194395500000006],
					[8.5349027,52.1942171],
					[8.5311003,52.193928500000005],
					[8.5273184,52.193589800000005],
					[8.5248936,52.1933695],
					[8.524400100000001,52.1933202],
					[8.523177,52.1932084],
					[8.521240500000001,52.1930308],
					[8.5189713,52.1928105],
					[8.515473700000001,52.192508000000004],
					[8.5126681,52.1922975],
					[8.510570600000001,52.1921692],
					[8.5092885,52.1921101],
					[8.5070194,52.1920311],
					[8.5047663,52.1920081],
					[8.504144100000001,52.1920081],
					[8.5006626,52.1921265],
					[8.498608,52.1922712],
					[8.4965954,52.192492200000004],
					[8.4946377,52.1927694],
					[8.492337000000001,52.1931919],
					[8.4901161,52.193662200000006],
					[8.4864844,52.194579600000004],
					[8.4836452,52.1953265],
					[8.477604900000001,52.1967744],
					[8.4763534,52.197020900000005]]
				}
			]
export default function(state = initalState, action){
	switch(action.type){
		case '[PRIMARY]:SET':
			return action.payload;
		default:
			 return state;
	}
}
