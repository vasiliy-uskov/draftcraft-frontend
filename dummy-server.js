const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/bin"));
app.use(express.static(__dirname  + "/images"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let levels = [
	{
		id: (1).toString(),
		task: "<b>Упражнение 1:</b> Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10) Построить чертёж точки по координатам С(15; 20; 30) M(20; 0; 25) F(35; 10; 15) D(0; 30; 10)",
		help: "Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость Проекция точек на плоскость ",
		img: "",
		title: "Проекция точек на плоскость",
		detailedAnswer: `{"arcs":[{"center":{"x":336.64071071411234,"y":202.0717510558765},"angle":6.277997520694391,"radius":83.51992400101004,"startAngle":5.6107466867920035,"lineType":"thin_solid"}],"lines":[{"start":{"x":158,"y":294},"end":{"x":432,"y":153}},{"start":{"x":485,"y":311},"end":{"x":184,"y":90}}],"dots":[{"position":{"x":410.904509474332,"y":163.85570862817224},"label":"A"},{"position":{"x":269.31828055142597,"y":152.6423255875918},"label":"B"},{"position":{"x":262.3769119538927,"y":240.28779348358074},"label":"C"},{"position":{"x":403.96314087679866,"y":251.50117652416117},"label":"D"},{"position":{"x":336.64071071411234,"y":202.0717510558765},"label":"O"},{"position":{"x":332,"y":264},"label":"S"}]}`,
		enable: true,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (2).toString(),
		task: "<b>Упражнение 2:</b> Построить чертёж точки по координатам E(10; 15; 30) M(30; 25; 0) F(0; 20; 15) D(0; 10; 0)",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "1.png",
		title: "Проекция точек на плоскость",
		detailedAnswer: `{"arcs":[{"center":{"x":336.64071071411234,"y":202.0717510558765},"angle":6.277997520694391,"radius":83.51992400101004,"startAngle":5.6107466867920035,"lineType":"thin_solid"}],"lines":[{"start":{"x":158,"y":294},"end":{"x":432,"y":153}},{"start":{"x":485,"y":311},"end":{"x":184,"y":90}}],"dots":[{"position":{"x":410.904509474332,"y":163.85570862817224},"label":"A"},{"position":{"x":269.31828055142597,"y":152.6423255875918},"label":"B"},{"position":{"x":262.3769119538927,"y":240.28779348358074},"label":"C"},{"position":{"x":403.96314087679866,"y":251.50117652416117},"label":"D"},{"position":{"x":336.64071071411234,"y":202.0717510558765},"label":"O"},{"position":{"x":332,"y":264},"label":"S"}]}`,
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (3).toString(),
		task: "<b>Упражнение 3:</b> Построить проекции недостающих точек, если известно, что они принадлежат горизонтальной плоскости уровня, отстоящей от плоскости П<sub>1</sub> на 15",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "2.png",
		title: "Проекция точек на плоскость",
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (4).toString(),
		task: "<b>Упражнение 4:</b> Построить недостающие проекции точек, принадлежащих поверхности пирамиды",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "3.png",
		title: "Проекция точек на плоскость",
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (5).toString(),
		task: "<b>Упражнение 5:</b> Построить недостающие проекции точек, принадлежащих поверхности призмы",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "4.png",
		title: "Lorem ipsum dolor set amet. Dolor set amet. Уаправ ару апе зуфаафаф фыл уне ьффыафыв.",
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (6).toString(),
		task: "<b>Упражнение 6:</b> построить недостающую проекцию линии сечения многогранника плоскостью",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "5.png",
		title: "Lorem ipsum dolor set amet. Dolor set amet. Уаправ ару апе зуфаафаф фыл уне ьффыафыв.",
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
	{
		id: (7).toString(),
		task: "<b>Упражнение 7:</b> построить недостающую проекцию выреза",
		help: "<h2>Проекция точек на плоскость</h2>",
		img: "6.png",
		title: "Построить недостающую проекцию выреза",
		enable: false,
		passed: false,
		canvasSize: {
			width: 700,
			height: 400,
		}
	},
];

app.post("/get_variant_tasks", function (req, res) {
	res.json(levels);
});

app.post("/add_answer_to_level", function (req, res) {
	const levelId = req.body.taskId;
	console.log(req.body.answer);
	const level = levels.find((level) => level.id == levelId);
	level.passed = !!Math.round(Math.random());
	const levelIndex = levels.indexOf(level);
	if (levels[levelIndex + 1])
	{
		levels[levelIndex + 1].enable = level.passed;
	}

	res.status(200);
	res.json(undefined);
});

app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});