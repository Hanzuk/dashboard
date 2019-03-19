const IncomeChart = {
  chart: {
    id: 'income-chart',
    defaultLocale: 'es',
    locales: [
      {
        name: 'es',
        options: {
          months: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
          ],
          shortMonths: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
          ],
          days: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
          ],
          shortDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          toolbar: {
            download: 'Download SVG',
            selection: 'Selection',
            selectionZoom: 'Selection Zoom',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            pan: 'Panning',
            reset: 'Reset Zoom'
          }
        }
      }
    ],
    animations: {
      dynamicAnimation: {
        enabled: true,
        speed: 1000
      }
    }
  },
  xaxis: {
    categories: [],
    labels: {
      formatter: function(value) {
        let date = new Intl.DateTimeFormat('es-CR', {
          month: 'long'
        }).format(new Date(value));
        return date[0].toUpperCase() + date.slice(1);
      }
    }
  },
  yaxis: {
    labels: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value);
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      colorStops: [
        {
          offset: 0,
          color: '#43e97b',
          opacity: 1
        },
        {
          offset: 100,
          color: '#38f9d7',
          opacity: 1
        }
      ]
    }
  },
  dataLabels: { enabled: false },
  colors: ['#3df1aa']
};

const ExpensesChart = {
  chart: {
    id: 'expenses-chart',
    defaultLocale: 'es',
    locales: [
      {
        name: 'es',
        options: {
          months: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
          ],
          shortMonths: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
          ],
          days: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
          ],
          shortDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          toolbar: {
            download: 'Download SVG',
            selection: 'Selection',
            selectionZoom: 'Selection Zoom',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            pan: 'Panning',
            reset: 'Reset Zoom'
          }
        }
      }
    ],
    animations: {
      dynamicAnimation: {
        enabled: true,
        speed: 1000
      }
    }
  },
  xaxis: {
    categories: [],
    labels: {
      formatter: function(value) {
        let date = new Intl.DateTimeFormat('es-CR', {
          month: 'long'
        }).format(new Date(value));
        return date[0].toUpperCase() + date.slice(1);
      }
    }
  },
  yaxis: {
    labels: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value);
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      colorStops: [
        {
          offset: 0,
          color: '#c471f5',
          opacity: 1
        },
        {
          offset: 100,
          color: '#fa71cd',
          opacity: 1
        }
      ]
    }
  },
  dataLabels: { enabled: false },
  colors: ['#e071e0']
};

const UtilityChart = {
  chart: {
    id: 'utility-chart',
    defaultLocale: 'es',
    locales: [
      {
        name: 'es',
        options: {
          months: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
          ],
          shortMonths: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
          ],
          days: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
          ],
          shortDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          toolbar: {
            download: 'Download SVG',
            selection: 'Selection',
            selectionZoom: 'Selection Zoom',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            pan: 'Panning',
            reset: 'Reset Zoom'
          }
        }
      }
    ],
    animations: {
      dynamicAnimation: {
        enabled: true,
        speed: 1000
      }
    }
  },
  labels: [],
  xaxis: {
    labels: {
      formatter: function(value) {
        let months = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ];
        return months[value];
      }
    }
  },
  yaxis: {
    labels: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value);
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      colorStops: [
        {
          offset: 0,
          color: '#4facfe',
          opacity: 1
        },
        {
          offset: 100,
          color: '#00f2fe',
          opacity: 1
        }
      ]
    }
  },
  dataLabels: { enabled: false },
  colors: ['#2dcafe']
};

export { IncomeChart, ExpensesChart, UtilityChart };
