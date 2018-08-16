$(".tb-list").niceScroll({cursorborder:"",cursorcolor:"#ddd",boxzoom:true,touchbehavior:true});

//各兵种数量
$('#chart_1').highcharts({
	chart: {type: 'bar',backgroundColor: 'none'},
	title: {
		text: '各兵种数量',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#999"
		}
	},
	credits:{enabled: false},
	xAxis: {categories: ['保障军', '陆军', '海军', '空军', '火箭军'],},
	yAxis: {visible: false},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true,
				allowOverlap: true // 允许数据标签重叠
			}
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: 0,
		y: 0,
		floating: true,
		borderWidth: 1,
		backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF')
	},
	series: [{
		name: '分队数',
		data: [12, 31, 32, 12, 22]
	}, {
		name: '人数',
		data: [78, 198, 200, 88, 123]
	}]
});

//区域数量统计
$('#chart_2').highcharts({
    chart: {type: 'column',backgroundColor: 'none'},
	title: {
		text: '各区域分队及民兵数',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#999"
		}
	},
	credits:{enabled: false},
	xAxis: {
		categories: [
			'浔阳区',
			'濂溪区',
			'柴桑区',
			'武宁县',
			'修水县',
			'永修县',
			'德安县',
			'都昌县',
			'湖口县',
			'彭泽县',
			'瑞昌市',
			'共青城市',
			'庐山市'
		],
		crosshair: true
	},
	yAxis: {
		visible: false
	},
	plotOptions: {
		column: {
			borderWidth: 0,
			stacking: 'normal'
		}
	},
	series: [
		{
			name: '民兵数',
			data: [123,234,123,344,155,267,155,124,145,256,155,263,124]
		},
		{
			name: '分队数',
			data: [12,23,12,33,15,25,16,18,19,26,36,33,15]
		}
	]
});

//民兵性别统计
$('#chart_3').highcharts({
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45
		},
		backgroundColor: 'none'
	},
	title: {
		text: '民兵性别统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#999"
		}
	},
	credits:{enabled: false},
	plotOptions: {
		pie: {
			innerSize:50,
			depth: 25,
			dataLabels: {
				enabled: true,
				//format: '<b>{point.name}</b>:{y}',
				style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			}
		}
	},
	series: [{
		name: '民兵人数',
		data: [
			['男性', 940],
			['女性', 60],
		]
	}]
});

//民兵建制统计
$('#chart_4').highcharts({
	chart: {type: 'bar',backgroundColor: 'none'},
	title: {
		text: '民兵建制统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#999"
		}
	},
	credits:{enabled: false},
	xAxis: {
		categories: ['团', '营', '连', '排']
	},
	yAxis: {
		min: 0,
		title: {
			text: '民兵人数'
		},
		visible: false
	},
	legend: {enabled: false},
	plotOptions: {
		series: {
			stacking: 'normal'
		}
	},
	series: [{
		name: '浔阳区',
		data: [2, 4, 8, 16]
	},{
		name: '濂溪区',
		data: [2, 4, 8, 16]
	},{
		name: '柴桑区',
		data: [2, 4, 8, 16]
	},{
		name: '武宁县',
		data: [2, 4, 8, 16]
	},{
		name: '修水县',
		data: [2, 4, 8, 16]
	},{
		name: '永修县',
		data: [2, 4, 8, 16]
	},{
		name: '德安县',
		data: [2, 4, 8, 16]
	},{
		name: '都昌县',
		data: [2, 4, 8, 16]
	},{
		name: '湖口县',
		data: [2, 4, 8, 16]
	},{
		name: '彭泽县',
		data: [2, 4, 8, 16]
	},{
		name: '瑞昌市',
		data: [2, 4, 8, 16]
	},{
		name: '共青城市',
		data: [2, 4, 8, 16]
	},{
		name: '庐山市',
		data: [2, 4, 8, 16]
	}]
});

//民兵年龄统计
$('#chart_6').highcharts({
	chart: {
		type: 'pie',
		options3d: {
			//enabled: true,
			alpha: 45
		},
		backgroundColor: 'none'
	},
	colors:			 ['#DDDF0D','#55BF3B','#DF5353','#7798BF','#aaeeee','#ff0066','#aaeeee','#55BF3B','#DF5353','#7798BF','#aaeeee'],
	title: {
		text: '民兵年龄统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#c0c0c0"
		}
	},
	credits:{enabled: false},
	legend:{
		itemStyle:{color:'#a0a0a0'},
		itemHoverStyle: {color: '#ffffff'}
	},
	plotOptions: {
		pie: {
			//innerSize:50,
			//depth: 25,
			dataLabels: {
				enabled: false,
				//format: '<b>{point.name}</b>:{y}',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			showInLegend: true
		}
	},
	series: [{
		name: '民兵年龄',
		data: [
			['18至35岁', 650],
			['36岁以上', 350],
		]
	}]
});

//历年训练成绩统计
$('#chart_7').highcharts({
	chart: {
		type: 'column',
		backgroundColor: 'none'
		//type: 'area'
	},
	title: {
		text: '历年训练成绩',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"#999"
		}
	},
	credits:{enabled: false},
	xAxis: {
		categories: [
			'射击','队列','战术','救护','内务','理论'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		visible: false
	},
	plotOptions: {
		/*
		area: {
			stacking: 'normal',
			//lineColor: '#666666',
			lineWidth: 1,
		}
		*/
	},
	series: [{
		name: '2017年',
		data: [80,76,66,90,75,88]
	},{
		name: '2018年',
		data: [85,86,76,88,80,78]
	}]
});
