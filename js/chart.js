$(".tb-list").niceScroll({cursorborder:"",cursorcolor:"#1897d3",boxzoom:true,touchbehavior:true});

//各兵种数量
$('#chart_1').highcharts({
	chart: {
		type: 'bar',
		backgroundColor: 'none',
		//marginTop: 32,
		spacingTop: 32,
	},
	title: {
		text: null,
		align: 'left',
		style: {
			'display':'none',
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)"
		}
	},
	colors:[
		'#aaeeee',
		'#ff0066',
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
	],
	credits:{enabled: false},
	xAxis: {
		categories: ['保障军','陆军','海军','空军','火箭军'],
		labels:{
			style:{
				'color':'#dddddd'
			}
		},
		lineWidth:0,
		tickLength:0
	},
	yAxis: {visible: false},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true,
				allowOverlap: true // 允许数据标签重叠
			},
			borderWidth: 0,
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: 0,
		y: 0,
		floating: true,
		borderWidth: 0,
		backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,.38)'),
		
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
    chart: {type: 'column',backgroundColor: 'none',spacingTop:32},
	title: {
		text: '各区域分队及民兵数',
		align: 'left',
		style: {
			"display":"none",
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)"
		}
	},
	colors:[
		
		'#DF5353',
		'#7798BF',
		'#aaeeee',
		'#ff0066',
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
	],
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
		crosshair: true,
		labels:{
			style:{
				'color':'#dddddd'
			}
		},
		
	},
	yAxis: {
		visible: false
	},
	legend:{
		itemStyle:{color:'#dddddd'},
		itemHoverStyle: {color: '#ffffff'}
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
		backgroundColor: 'none',
		spacingTop:32
	},
	colors:[
		'#7798BF',
		'#ff0066',
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
		
	],
	title: {
		text: '民兵性别统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)",
			"display":"none"
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
	chart: {type: 'bar',backgroundColor: 'none',spacingTop:32},
	title: {
		text: '民兵建制区域统计',
		align: 'left',
		style: {
			"display":"none",
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)"
		}
	},
	credits:{enabled: false},
	xAxis: {
		categories: ['团', '营', '连', '排'],
		labels:{
			style:{
				'color':'#dddddd'
			}
		},
		lineWidth: 0,
		tickLength: 0
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
			stacking: 'normal',
			borderWidth: 0,
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
		backgroundColor: 'none',
		spacingTop:32
	},
	colors:[
		'#DDDF0D',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee',
		'#ff0066',
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
	],
	title: {
		text: '民兵年龄统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)",
			"display":"none"
		}
	},
	credits:{enabled: false},
	legend:{
		itemStyle:{color:'#dddddd'},
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
			showInLegend: true,
			borderWidth: 0
		
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
		backgroundColor: 'none',
		spacingTop:32
		//type: 'area'
	},
	colors:[
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
	],
	title: {
		text: '历年训练成绩',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)",
			"display":"none"
		}
	},
	credits:{enabled: false},
	xAxis: {
		categories: [
			'射击','队列','战术','救护','内务','理论'
		],
		crosshair: true,
		labels:{
			style:{
				'color':'#dddddd'
			}
		}
	},
	yAxis: {
		min: 0,
		visible: false
	},
	legend:{
		itemStyle:{color:'#dddddd'},
		itemHoverStyle: {color: '#ffffff'}
	},
	plotOptions: {
		/*
		area: {
			stacking: 'normal',
			//lineColor: '#666666',
			lineWidth: 1,
		}
		*/
		column: {
			borderWidth: 0,
			//stacking: 'normal'
		}
	},
	series: [{
		name: '2017年',
		data: [80,76,66,90,75,88]
	},{
		name: '2018年',
		data: [85,86,76,88,80,78]
	}]
});

//政治面貌统计
$('#chart_8').highcharts({
	chart: {
		type: 'pie',
		options3d: {
			//enabled: true,
			alpha: 45
		},
		backgroundColor: 'none',
		spacingTop:32
	},
	colors:[
		'#DDDF0D',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee',
		'#ff0066',
		'#aaeeee',
		'#55BF3B',
		'#DF5353',
		'#7798BF',
		'#aaeeee'
	],
	title: {
		text: '民兵政治面貌统计',
		align: 'left',
		style: {
			"fontSize": "14px",
			"color":"rgba(255,255,255,.62)",
			"display":"none"
		}
	},
	credits:{enabled: false},
	legend:{
		itemStyle:{color:'#dddddd'},
		itemHoverStyle: {color: '#ffffff'}
	},
	plotOptions: {
		pie: {
			innerSize:50,
			depth: 25,
			dataLabels: {
				enabled: false,
				//format: '<b>{point.name}</b>:{y}',
				style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			
			showInLegend: true,
			borderWidth: 0
		}
	},
	series: [{
		name: '民兵人数',
		data: [
			['党员', 780],
			['团员', 260],
		]
	}]
});


//数据统计
$('#chart_count_1').highcharts({
	chart: {
		type: 'solidgauge',
		backgroundColor: 'none'
	},
	title: null,
	pane: {
		center: ['50%', '50%'],
		size: '100%',
		startAngle: -135,
		endAngle: 135,
		background: {
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
			innerRadius: '60%',
			outerRadius: '100%',
			shape: 'arc'
		}
	},
	tooltip: {enabled: false},
	yAxis: {
		title: {
			text: '应急力量',
			y:100,
			style:{
				'font-weight':'400',
				'font-size':'16px',
				'color':'rgba(255,255,255,.62)'
			}
		},
		labels: {
			style:{
				'display':'none'
			}
		},
		min: 0,
		max: 100
	},
	plotOptions: {
		solidgauge: {
			dataLabels: {
				y: -18,
				borderWidth: 0,
				useHTML: true
			}
		}
	},
	credits: {enabled: false},
	series: [{
		name: '应急力量',
		data: [45],
		dataLabels: {
			format: '<div style="text-align:center"><span style="font-size:18px;color:' +
			((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'rgba(255,255,255,1)') + '">{y}%</span>' 
		}
	}]
});
$('#chart_count_2').highcharts({
	chart: {
		type: 'solidgauge',
		backgroundColor: 'none'
	},
	title: null,
	pane: {
		center: ['50%', '50%'],
		size: '100%',
		startAngle: -135,
		endAngle: 135,
		background: {
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
			innerRadius: '60%',
			outerRadius: '100%',
			shape: 'arc'
		}
	},
	tooltip: {enabled: false},
	yAxis: {
		title: {
			text: '专业力量',
			y:100,
			style:{
				'font-weight':'400',
				'font-size':'16px',
				'color':'rgba(255,255,255,.62)'
			}
		},
		labels: {
			style:{
				'display':'none'
			}
		},
		min: 0,
		max: 100
	},
	plotOptions: {
		solidgauge: {
			dataLabels: {
				y: -18,
				borderWidth: 0,
				useHTML: true
			}
		}
	},
	credits: {enabled: false},
	series: [{
		name: '专业力量',
		data: [25],
		dataLabels: {
			format: '<div style="text-align:center"><span style="font-size:18px;color:' +
			((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'rgba(255,255,255,1)') + '">{y}%</span>' 
		}
	}]
});
$('#chart_count_3').highcharts({
	chart: {
		type: 'solidgauge',
		backgroundColor: 'none'
	},
	title: null,
	pane: {
		center: ['50%', '50%'],
		size: '100%',
		startAngle: -135,
		endAngle: 135,
		background: {
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
			innerRadius: '60%',
			outerRadius: '100%',
			shape: 'arc'
		}
	},
	tooltip: {enabled: false},
	yAxis: {	
		//minorTickInterval: null,
		//tickWidth: 0,
		title: {
			text: '特殊力量',
			y:100,
			style:{
				'font-weight':'400',
				'font-size':'16px',
				'color':'rgba(255,255,255,.62)'
			}
		},
		labels: {
			style:{
				'display':'none'
			}
		},
		min: 0,
		max: 100
	},
	plotOptions: {
		solidgauge: {
			dataLabels: {
				y: -18,
				borderWidth: 0,
				useHTML: true
			}
		}
	},
	credits: {enabled: false},
	series: [{
		data: [30],
		dataLabels: {
			format: '<div style="text-align:center"><span style="font-size:18px;color:' +
			((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'rgba(255,255,255,1)') + '">{y}%</span>' 
		}
	}]
});
