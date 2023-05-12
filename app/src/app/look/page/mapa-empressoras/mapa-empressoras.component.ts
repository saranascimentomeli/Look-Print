import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, SimpleChanges, ViewChild, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';
import { bancadas } from 'src/app/models/bancadas';
import { tbatualizacao } from 'src/app/models/tbatualizacao';
import { environment } from 'src/environments/environment';
import { MenuComponent } from '../../../menu/menu.component';
import { LookservicoService } from '../../services/lookservico.service';
import { NewbancadaComponent } from '../newbancada/newbancada.component';
import { NewlayoutComponent } from '../newlayout/newlayout.component';


@Component({
  selector: 'app-mapa-empressoras',
  templateUrl: './mapa-empressoras.component.html',
  styleUrls: ['./mapa-empressoras.component.css']
})
export class MapaEmpressorasComponent implements OnInit {

  private cx!: CanvasRenderingContext2D | null;
  heatmapContainer!: HTMLElement;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @ViewChild('heatmapContainer', { static: true }) minhaDivRef!: ElementRef<HTMLDivElement>;

  dataatualizacao = '';
  dataatualizacaoRetorno = '';
  bgImg = new Image();
  size = 25;
  color = 'red';
  x = 0;
  y = 0;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  botoes: HTMLDivElement[] = [];
  minhaMatriz: number[][] = [];
  previousIsHandset!: boolean;
  currentIsHandset!: boolean;
  isHandsetChanged = false;
  tamanhoAnterior!: ClientRect;
  bancadasgeral!: bancadas[];
  novasCoordenadas!: bancadas;
  serverInfo: number = 0;
  ListaAtualizacao: any[] = [];
  @Output() tamanhoMudou = new EventEmitter();
  private dialogBoxDiv: any;
  public divmapa: any;
  private menugeral: any;
  private Titulo: any;
  private Status: any;
  private Potencia: any;
  private Velocidade: any;
  private descricao: any;

  private ip: any;
  ultimaAtualizacao: any;
  opcoes!: any[];
  valorSelecionado!: number;
  laySelecionado!: number;



  constructor(private menu: MenuComponent, private service: LookservicoService, public dialog: MatDialog) { }





  criarGrafico() {
    // Obtém uma referência ao elemento canvas
    var paretoCanvas = document.getElementById("pareto-chart") as HTMLCanvasElement;


    if (paretoCanvas) {
      const horasParadas = [10, 15, 8, 5, 3];
      const tiposParada = ["Manutenção", "Falha no sistema", "Tempo ocioso", "Ajuste de processo", "Outros"];

      const chart = new Chart(paretoCanvas, {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "Horas paradas",
              data: [],
              backgroundColor: "#007bff",
            },
          ],
        },
        options: {

          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Total Em segundos',
              color: 'black'
            }
          }

        }
      });
    }
  }

  Caregarbase(layselecionado: string) {

    this.service.GetLookBancadas(layselecionado).subscribe((x) => {
      this.bancadasgeral = x;
      console.log(this.bancadasgeral);
      this.removebotoes();
      this.Colocarbotoes();
      this.ngAfterViewInit();
    });

  }

  CarregaLay() {
    this.arrumarImagem();
    this.drawBgImg();
    this.service.buscarLay().subscribe((x) => {
      this.opcoes = x;
      console.log(this.opcoes);
      this.valorSelecionado = this.opcoes[0].id;
      this.pesquisarAtualizacao()
      this.Caregarbase(this.valorSelecionado.toString());
    });

  }

  SalvarCoordenada(x: number, y: number) {

    this.novasCoordenadas = new bancadas();
    this.novasCoordenadas.Layout = this.valorSelecionado.toString();
    this.novasCoordenadas.Bancada = " ";
    this.novasCoordenadas.Impressora = " ";
    this.novasCoordenadas.CoordX = x;
    this.novasCoordenadas.CoordY = y;

    this.service.SaveslookeBancadas(this.novasCoordenadas).subscribe((x) => {
      this.Caregarbase(this.valorSelecionado.toString());
    })
  }


  ngOnInit(): void {

    Chart.register(...registerables);
    this.cx = this.canvas.nativeElement.getContext('2d');
    this.cx!.fillRect(50, 50, 20, 20);

    this.CarregaLay();

    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .button-with-bg-image {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        border-radius: 50% !important;
        z-index: 3;
        background-image: url('../../../../assets/PrintLaranja2.png');
        background-size: cover;
        border: none;
      }

      .blink-button {
        animation: blink-animation 0.5s ease-in-out infinite alternate;
      }

      .blink-button2 {
        animation: blink-animation2 0.5s ease-in-out infinite alternate;
      }

      @keyframes blink-animation {
        0% {
          background-color: rgba(255, 255, 0, 0);
        }
        100% {
          background-color: rgba(255, 255, 0, 1);
         //background-color: rgba(255, 0, 0, 1);
        }
      }

      @keyframes blink-animation2 {
        0% {
          background-color: rgba(255, 255, 0, 0);
        }
        100% {
         background-color: rgba(255, 0, 0, 1);
        }
      }


    `;

    document.head.appendChild(styleElement);

    this.x = 28;
    this.y = 107;

    this.serverInfo = window.setInterval(() => {
      this.pesquisarAtualizacao();
    }, 10000);
    // let timerId: any;
    // timerId = window.setTimeout(this.focusWindow.bind(this), 5000); // 5 minutos
    this.criarGrafico();
  }

  focusWindow() {
    window.focus();
  }

  pesquisarAtualizacao() {

    var atualizacao = new tbatualizacao()
    atualizacao.robo = 'look'
    atualizacao.cad = environment.cad;
    this.ultimaAtualizacao = document.getElementById('Atualização');
    this.service.GetAtualizacao(atualizacao).subscribe((x) => {
      this.ListaAtualizacao = x;
      let data = new Date(this.ListaAtualizacao[0].data);
      if (this.dataatualizacao == '') {
        this.dataatualizacao = this.convertedataString(data, 'titulo') + ' ' + this.ListaAtualizacao[0].data.substr(11, 5);
        this.dataatualizacaoRetorno = this.dataatualizacao;
        this.ultimaAtualizacao.innerText = this.dataatualizacao;
      }
      else {


        this.dataatualizacaoRetorno = this.convertedataString(data, 'titulo') + ' ' + this.ListaAtualizacao[0].data.substr(11, 5);
        if ((this.dataatualizacaoRetorno != this.dataatualizacao)) {
          // this.tocarBeep();
          console.log(this.dataatualizacao, this.dataatualizacaoRetorno);
          this.ultimaAtualizacao.innerText = this.dataatualizacaoRetorno;
          this.Caregarbase(this.valorSelecionado.toString());
          this.dataatualizacao = this.dataatualizacaoRetorno;
        }


      }


    })

  }

  abrirNewLayout() {
    this.dialog.open(NewlayoutComponent, {

      data: this.opcoes.find(opcao => opcao.id == this.valorSelecionado)
    }).afterClosed().subscribe((x: string) => {

      if (x == 'ok') {
        this.CarregaLay();
      }

    });
  }

  convertedataString(date: Date, tipo: string) {

    let dia;
    let mes;
    let ano;
    if (date.getDate() > 9) {
      dia = date.getDate()
    }
    else {
      dia = '0' + date.getDate()
    }

    if ((date.getMonth() + 1) > 9) {
      mes = date.getMonth() + 1
    }
    else {
      mes = '0' + (date.getMonth() + 1)
    }

    ano = date.getFullYear();

    if (tipo == 'titulo') {
      return (dia + "/" + mes + "/" + ano);
    }
    else {
      return (ano + "-" + mes + "-" + dia);
    }

  }

  ngAfterViewInit(): void {

    this.tamanhoAnterior = this.minhaDivRef.nativeElement.getBoundingClientRect();
    setInterval(() => {
      const tamanhoAtual = this.minhaDivRef.nativeElement.getBoundingClientRect();
      if (this.tamanhoAnterior.width !== tamanhoAtual.width || this.tamanhoAnterior.height !== tamanhoAtual.height) {
        this.tamanhoMudou.emit(tamanhoAtual);
        this.tamanhoAnterior = tamanhoAtual;
        this.removebotoes();
        this.Colocarbotoes();
      }
    }, 500);


  }


  desenharPontoAoSoltar(x: any, y: any) {

    // Obtém as coordenadas x e y do clique em relação à página
    const rect = this.cx!.canvas.getBoundingClientRect();

    x = x - rect.left;
    y = y - rect.top;
    // Ajusta as coordenadas x e y para a escala real da imagem
    const escalaX = this.cx!.canvas.width / rect.width;
    const escalaY = this.cx!.canvas.height / rect.height;
    const posX = x * escalaX;
    const posY = (y * escalaY);


    var imageData = this.cx!.getImageData(0, 0, this.cx!.canvas.width, this.cx!.canvas.height);
    const divElement = this.minhaDivRef.nativeElement;
    const divWidth = divElement.getBoundingClientRect().width;
    const divHeight = divElement.getBoundingClientRect().height;

    const novoBotao = document.createElement('button');
    novoBotao.classList.add('button-with-bg-image', 'blink-button');


    var canvasLeft = this.cx!.canvas.offsetLeft;
    var canvasTop = this.cx!.canvas.offsetTop;
    var buttonWidth = novoBotao.offsetWidth;
    var buttonHeight = novoBotao.offsetHeight;
    

    var buttonX = canvasLeft + (posX * divWidth / imageData.width) - (buttonWidth / 2);
    var buttonY = canvasTop + (posY * divHeight / imageData.height) - (buttonHeight / 2);

    novoBotao.id = '';
    novoBotao.innerText = '';
   


    novoBotao.style.backgroundImage = 'url(../assets/cinza.png)';
    novoBotao.style.backgroundSize = 'cover';

    // Cria o elemento SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 120 120');
    svg.setAttribute('class', 'circle-svg');
    svg.style.zIndex = '1';

    // Cria o círculo cinza
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '60');
    circle.setAttribute('cy', '60');
    circle.setAttribute('r', '50');
    circle.setAttribute('stroke', 'lightgray');
    circle.setAttribute('stroke-width', '22');
    circle.setAttribute('fill', 'none');
    // circle.setAttribute('class', 'circle-svg-path'); // Adicione esta linha
    svg.appendChild(circle);

    // Cria o container do botão e do círculo
    const circleContainer = document.createElement('div');

    circleContainer.style.position = "absolute";
    circleContainer.style.top = buttonY + 'px';
    circleContainer.style.left = buttonX + 'px';

    circleContainer.style.width = '30px';
    circleContainer.style.height = '30px';
    circleContainer.style.borderRadius = '100%';

    circleContainer.classList.add('circle-container');

    circleContainer.appendChild(svg);
    circleContainer.appendChild(novoBotao);




    this.SalvarCoordenada(posX, posY)




    this.botoes.push(circleContainer);

    this.minhaDivRef.nativeElement.appendChild(circleContainer);



  }

  onMouseUp() {

    //Quando solta a bancada
    this.isDragging = false;
    const rect = this.cx!.canvas.getBoundingClientRect();
    this.desenharPontoAoSoltar(this.x + rect.left - 12.5, this.y - 3);
    this.x = 28;
    this.y = 107;

  }

  onMouseDown(event: MouseEvent) {
    //Quando clica o botão
    const rect = this.cx!.canvas.getBoundingClientRect();
    this.isDragging = true;
    this.offsetX = (event.offsetX);
    this.offsetY = event.offsetY;

  }


  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      window.requestAnimationFrame(() => {
        const rect = this.cx!.canvas.getBoundingClientRect();
        this.x = (event.clientX - this.offsetX) - rect.left + 15
        this.y = event.clientY - this.offsetY;
        // console.log(this.x, this.y, 'individual')
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent) {
    if (this.isDragging) {

      const rect = this.cx!.canvas.getBoundingClientRect();
      this.x = (event.clientX - this.offsetX) - rect.left + 15;
      this.y = event.clientY - this.offsetY;

      // console.log(this.x, this.y, 'geral')

    }

  }


  @HostListener('window:resize')
  minhaFuncaoDeRedimensionamento() {

    this.removebotoes();
    this.Colocarbotoes();

  }












  removebotoes() {

    for (let i = 0; i < this.botoes.length; i++) {
      this.minhaDivRef.nativeElement.removeChild(this.botoes[i]);

    }

    for (let i = 0; i < this.botoes.length; i++) {
      const botao = this.botoes[i];
      this.botoes.splice(i, 1);
      i--; // é necessário decrementar i quando um elemento é removido da array

    }


  }


  Colocarbotoes() {


    for (let i = 0; i < this.bancadasgeral.length; i++) {

      const x = this.bancadasgeral[i].CoordX;
      const y = this.bancadasgeral[i].CoordY;

      var imageData = this.cx!.getImageData(0, 0, this.cx!.canvas.width, this.cx!.canvas.height);
      const divElement = this.minhaDivRef.nativeElement;
      const divWidth = divElement.getBoundingClientRect().width;
      const divHeight = divElement.getBoundingClientRect().height;

      const novoBotao = document.createElement('button');
      novoBotao.style.zIndex = '2'
      var canvasLeft = this.cx!.canvas.offsetLeft;
      var canvasTop = this.cx!.canvas.offsetTop;
      var buttonWidth = novoBotao.offsetWidth;
      var buttonHeight = novoBotao.offsetHeight;


      var buttonX = canvasLeft + (x * divWidth / imageData.width) - (buttonWidth / 2);
      var buttonY = canvasTop + (y * divHeight / imageData.height) - (buttonHeight / 2);

      novoBotao.id = this.bancadasgeral[i].id.toString() + ',' + this.bancadasgeral[i].Bancada + ',' +
        this.bancadasgeral[i].Impressora + ',' + this.bancadasgeral[i].CoordX + ',' +
        this.bancadasgeral[i].CoordY + ',' + this.bancadasgeral[i].status + ',' + this.bancadasgeral[i].potencia + ',' +
        this.bancadasgeral[i].velocidade + ',' + this.bancadasgeral[i].descricao;
      novoBotao.innerText = '';


      if (this.bancadasgeral[i].status == null) {
        novoBotao.style.backgroundImage = 'url(../assets/Printcinza2.png)';
        novoBotao.classList.add('button-with-bg-image');
      }
      else {
        if (this.bancadasgeral[i].potencia != 21.5 || this.bancadasgeral[i].velocidade != 5) {
          novoBotao.style.backgroundImage = 'url(../assets/PrintAmarelo.png)';
          novoBotao.classList.add('button-with-bg-image', 'blink-button');
        }
        else if (this.bancadasgeral[i].status == 'EM AGUARDO' || this.bancadasgeral[i].status == 'READY') {
          novoBotao.style.backgroundImage = 'url(../assets/PrintVerde2.png)';
          novoBotao.classList.add('button-with-bg-image', 'blink-button');
        }
        else if (this.bancadasgeral[i].status == '') {
          novoBotao.style.backgroundImage = 'url(../assets/Printcinza2.png)';
          novoBotao.classList.add('button-with-bg-image');
        }
        else {
          novoBotao.style.backgroundImage = 'url(../assets/PrintLaranja2.png)';
          novoBotao.classList.add('button-with-bg-image', 'blink-button2');
        }
      }


      novoBotao.style.backgroundSize = 'cover';

      novoBotao.addEventListener('click', (event) => {
        this.AbrirCadastroBancada(novoBotao);
      });

      novoBotao.addEventListener('mousemove', (event) => {
        this.onMouseMovenovo(novoBotao, event, this.bancadasgeral[i].horasParadasPorTipo, this.bancadasgeral[i].tiposParada);
      });

      novoBotao.addEventListener('mouseleave', (event) => {
        this.mouseleavenovo(event);
      });

      // Cria o elemento SVG
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 120 120');
      svg.setAttribute('class', 'circle-svg');
      svg.style.zIndex = '1';

      // Cria o círculo cinza
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '60');
      circle.setAttribute('cy', '60');
      circle.setAttribute('r', '50');
      circle.setAttribute('stroke', 'lightgray');
      circle.setAttribute('stroke-width', '22');
      circle.setAttribute('fill', 'none');
      // circle.setAttribute('class', 'circle-svg-path'); // Adicione esta linha
      svg.appendChild(circle);

      interface Time {
        hour: number;
        minute: number;
      }

      interface Interval {
        start: Time;
        end: Time;
      }



      const downtimeIntervals: Interval[] = [];
      this.bancadasgeral[i].paradas.forEach(parada => {
        const horaInicio = parseInt(parada.inicio.substr(11, 2));
        const minutoInicio = parseInt(parada.inicio.substr(14, 2));
        const horaFim = parseInt(parada.fim.substr(11, 2));
        const minutoFim = parseInt(parada.fim.substr(14, 2));
        downtimeIntervals.push({
          start: { hour: horaInicio, minute: minutoInicio },
          end: { hour: horaFim, minute: minutoFim }
        });
      });

      const workingIntervals = [
        { start: { hour: 0, minute: 0 }, end: { hour: 23, minute: 59 } },
      ];

      this.addArcs(svg, workingIntervals, 'green');
      this.addArcs(svg, downtimeIntervals, 'red');

      // Cria o container do botão e do círculo
      const circleContainer = document.createElement('div');

      circleContainer.style.position = "absolute";
      circleContainer.style.top = buttonY + 'px';
      circleContainer.style.left = buttonX + 'px';

      circleContainer.style.width = '30px';
      circleContainer.style.height = '30px';
      circleContainer.style.borderRadius = '100%';

      circleContainer.classList.add('circle-container');

      circleContainer.appendChild(svg);
      circleContainer.appendChild(novoBotao);


      this.botoes.push(circleContainer);

      this.minhaDivRef.nativeElement.appendChild(circleContainer);



    }

  }


  timeToDegrees(time: any) {
    const totalMinutes = time.hour * 60 + time.minute;
    return (totalMinutes / (24 * 60)) * 360;
  }

  addArcs(svg: any, intervals: any, color: any) {


    intervals.forEach((interval: any) => {
      const startAngle = this.timeToDegrees(interval.start);
      const endAngle = this.timeToDegrees(interval.end);

      const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      arc.setAttribute('d', this.createArc(60, 60, 50, startAngle, endAngle));
      arc.setAttribute('fill', 'none');
      arc.setAttribute('stroke', color);
      arc.setAttribute('stroke-width', '22');
      svg.appendChild(arc);
    });
  }



  createArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
    const start = this.polarToCartesian(cx, cy, r, endAngle);
    const end = this.polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = ['M', start.x, start.y, 'A', r, r, 0, largeArcFlag, 0, end.x, end.y].join(' ');

    return d;
  }

  private polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }

  mouseleavenovo($event: any) {

    this.dialogBoxDiv.hidden = true;
  }


  onMouseMovenovo(botao: HTMLButtonElement, event: MouseEvent, horasParadasPorTipo: number[], tiposParada: string[]) {

    let valor = 0;
    var paretoCanvas = document.getElementById("pareto-chart") as HTMLCanvasElement;
    if (tiposParada.length > 0) {
      const chart = Chart.getChart(paretoCanvas);
      chart!.data.labels = tiposParada;
      chart!.data.datasets[0].data = horasParadasPorTipo;
      chart!.update();
      paretoCanvas.style.display = "block";
      valor = 230;
    }
    else {
      paretoCanvas.style.display = "none";
      valor = 130;
    }


    const rect = this.cx!.canvas.getBoundingClientRect();
    let x = event.clientX - rect.left + 80;
    let y = event.clientY - valor

    this.dialogBoxDiv = document.getElementById('dialog-box-container');
    this.divmapa = document.getElementById('heatmapContainer');

    const divmapaWidth = this.dialogBoxDiv.clientWidth;
    const divmapaHeight = this.dialogBoxDiv.clientHeight;

    const dialogBoxX = this.dialogBoxDiv.offsetLeft;
    const dialogBoxY = this.dialogBoxDiv.offsetTop;

    console.log(`A posição atual do diálogo é (${this.divmapa.clientWidth + ' ' + divmapaWidth}, ${dialogBoxY + ' ' + divmapaHeight}).`);
    if (((dialogBoxY + 220) - divmapaHeight) < 0) {
      console.log('maior')
      x = x + 100;
      y = y + 150;
    }

    if ((dialogBoxX + divmapaWidth) > this.divmapa.clientWidth) {
      console.log('maior')
      x = (x - divmapaWidth) - 50;
      y = y + 150;
    }


    this.ip = document.getElementById('ip');
    this.Titulo = document.getElementById('title');
    this.Status = document.getElementById('StatusImp');
    this.Potencia = document.getElementById('potencia');
    this.Velocidade = document.getElementById('velocidade');
    this.descricao = document.getElementById('status-description');

    this.Titulo.innerText = botao.id.toString().split(',')[1];
    this.ip.innerText = botao.id.toString().split(',')[2];

    this.descricao.innerText = botao.id.toString().split(',')[8];

    if (botao.id.toString().split(',')[5] != 'null') {
      this.Status.innerText = botao.id.toString().split(',')[5];
    }
    else {
      this.Status.innerText = 'DESLIGADA';
    }

    if (botao.id.toString().split(',')[6] != 'null') {
      this.Potencia.innerText = "Tonalidade : " + botao.id.toString().split(',')[6];
    }
    else {
      this.Potencia.innerText = "Tonalidade : ";
    }

    if (botao.id.toString().split(',')[7] != 'null') {
      this.Velocidade.innerText = "Velocidade : " + botao.id.toString().split(',')[7];
    }
    else {
      this.Velocidade.innerText = "Velocidade : ";
    }

    if (botao.id.toString().split(',')[6] != '21.5') {
      this.Potencia.style.color = 'red';
    }
    else {
      this.Potencia.style.color = 'black';
    }

    if (botao.id.toString().split(',')[7] != '5') {
      this.Velocidade.style.color = 'red';
    }
    else {
      this.Velocidade.style.color = 'black';
    }

    if (this.Status.innerText == 'DESLIGADA') {
      this.Status.style.color = 'gray';
    }
    else if (this.Status.innerText == 'EM AGUARDO' || this.Status.innerText == 'READY') {
      this.Status.style.color = 'green';
    }
    else {
      this.Status.style.color = 'red';
    }

    this.dialogBoxDiv.style.left = `${x}px`;
    this.dialogBoxDiv.style.top = `${y}px`;
    this.dialogBoxDiv.style.zIndex = 10;
    this.dialogBoxDiv.hidden = false;


  }


  AbrirCadastroBancada(botao: HTMLButtonElement) {

    this.novasCoordenadas = new bancadas();
    this.novasCoordenadas.id = parseInt(botao.id.toString().split(',')[0]);
    this.novasCoordenadas.Layout = this.valorSelecionado.toString();
    this.novasCoordenadas.Bancada = botao.id.toString().split(',')[1];
    this.novasCoordenadas.Impressora = botao.id.toString().split(',')[2];
    this.novasCoordenadas.CoordX = parseFloat(botao.id.toString().split(',')[3]);
    this.novasCoordenadas.CoordY = parseFloat(botao.id.toString().split(',')[4]);

    this.dialog.open(NewbancadaComponent, {

      data: this.novasCoordenadas
    }).afterClosed().subscribe((x: bancadas[]) => {

      this.Caregarbase(this.valorSelecionado.toString());
    });
  }



  teste() {


    const x = 630;
    const y = 432;

    this.cx!.beginPath();
    this.cx!.arc(x, y, 3, 0, 2 * Math.PI);
    this.cx!.fillStyle = 'red';
    this.cx!.fill();


    var imageData = this.cx!.getImageData(0, 0, this.cx!.canvas.width, this.cx!.canvas.height);
    const divElement = this.minhaDivRef.nativeElement;
    const divWidth = divElement.getBoundingClientRect().width;
    const divHeight = divElement.getBoundingClientRect().height;

    const novoBotao = document.createElement('button');

    var canvasLeft = this.cx!.canvas.offsetLeft;
    var canvasTop = this.cx!.canvas.offsetTop;
    var buttonWidth = novoBotao.offsetWidth;
    var buttonHeight = novoBotao.offsetHeight;
    //console.log(`Largura da div: ${divWidth}px, Altura da div: ${divHeight}px`);

    var buttonX = canvasLeft + (x * divWidth / imageData.width) - (buttonWidth / 2);
    var buttonY = canvasTop + (y * divHeight / imageData.height) - (buttonHeight / 2);


    novoBotao.innerText = 'Novo botão';
    novoBotao.style.backgroundSize = 'cover';

    // Cria o elemento SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 120 120');
    svg.setAttribute('class', 'circle-svg');
    svg.style.zIndex = '1';

    // Cria o círculo cinza
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '60');
    circle.setAttribute('cy', '60');
    circle.setAttribute('r', '50');
    circle.setAttribute('stroke', 'lightgray');
    circle.setAttribute('stroke-width', '22');
    circle.setAttribute('fill', 'none');
    // circle.setAttribute('class', 'circle-svg-path'); // Adicione esta linha
    svg.appendChild(circle);


    const circleContainer = document.createElement('div');

    circleContainer.style.position = "absolute";
    circleContainer.style.top = buttonY + 'px';
    circleContainer.style.left = buttonX + 'px';

    circleContainer.style.width = '30px';
    circleContainer.style.height = '30px';
    circleContainer.style.borderRadius = '100%';

    circleContainer.classList.add('circle-container');

    circleContainer.appendChild(svg);
    circleContainer.appendChild(novoBotao);


    this.botoes.push(circleContainer);


    this.minhaDivRef.nativeElement.appendChild(circleContainer);




  }


  carregarImagem() {
    const opcaoSelecionada = this.opcoes.find(opcao => opcao.id == this.valorSelecionado);
    console.log(opcaoSelecionada);
    if (opcaoSelecionada) {
      const img = new Image();
      img.src = 'data:image/png;base64,' + opcaoSelecionada.layoutFoto;
      img.onload = () => {
        this.cx!.canvas.width = this.bgImg.width;
        this.cx!.canvas.height = this.bgImg.height;
        this.cx!.clearRect(0, 0, this.cx!.canvas.width, this.cx!.canvas.height);
        this.cx!.drawImage(img, 0, 0);
        this.cx!.canvas.style.backgroundRepeat = 'no-repeat';
        this.cx!.canvas.style.backgroundSize = 'cover';
      };
    }
    this.Caregarbase(this.valorSelecionado.toString());
  }


  drawBgImg() {

    this.bgImg.src = '../assets/Printers.png';
    this.bgImg.onload = () => {
      this.cx!.canvas.width = this.bgImg.width;
      this.cx!.canvas.height = this.bgImg.height;
      this.cx!.drawImage(this.bgImg, 0, 0);
      this.cx!.canvas.style.backgroundRepeat = 'no-repeat';
      this.cx!.canvas.style.backgroundSize = 'cover';
    }
  }

  arrumarImagem() {

    let comprimento_canvas = this.cx!.canvas.height;
    let largura_canvas = this.cx!.canvas.width;
    console.log(comprimento_canvas);
    console.log(largura_canvas);
  }




}
