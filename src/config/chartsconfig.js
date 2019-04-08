const IncomeChart = {
  chart: {
    id: 'expenses-chart',
    toolbar: {
      show: false
    },
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
          shortDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
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
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      maxWidth: 33,
      formatter: function(value) {
        let display = ''
        switch (value.toString().length) {
          case 6:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 7:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 8:
            display = `${value.toString().slice(0, 2)}M`
            break

          case 9:
            display = `${value.toString().slice(0, 3)}M`
            break

          case 10:
            display = `${value.toString().slice(0, 4)}M`
            break

          default:
            display = '0'
            break
        }
        return display
      }
    }
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value)
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
  colors: ['#e071e0']
}

const ExpensesByPeriodChart = {
  chart: {
    id: 'income-chart',
    toolbar: {
      show: false
    },
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
        }).format(new Date(value))
        return date[0].toUpperCase() + date.slice(1)
      }
    }
  },
  yaxis: {
    labels: {
      maxWidth: 30,
      formatter: function(value) {
        let display = ''
        switch (value.toString().length) {
          case 6:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 7:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 8:
            display = `${value.toString().slice(0, 2)}M`
            break

          case 9:
            display = `${value.toString().slice(0, 3)}M`
            break

          case 10:
            display = `${value.toString().slice(0, 4)}M`
            break

          default:
            display = '0'
            break
        }
        return display
      }
    }
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value)
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
          color: '#c41432',
          opacity: 1
        },
        {
          offset: 100,
          color: '#fc5a44',
          opacity: 1
        }
      ]
    }
  },
  dataLabels: { enabled: false },
  colors: ['#3df1aa']
}

const UtilityChart = {
  chart: {
    id: 'utility-chart',
    toolbar: {
      show: false
    },
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
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      maxWidth: 25,
      // offsetX: -100,
      formatter: function(value) {
        let display = ''
        switch (value.toString().length) {
          case 6:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 7:
            display = `${value.toString().slice(0, 1)}M`
            break

          case 8:
            display = `${value.toString().slice(0, 2)}M`
            break

          case 9:
            display = `${value.toString().slice(0, 3)}M`
            break

          default:
            display = '0'
            break
        }
        return display
      }
    }
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value)
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
}

const CustomersChart = {
  chart: {
    height: 350,
    type: 'radialBar'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%'
      }
    }
  },
  labels: []
}

const ExpensesByHeadquarterChart = {
  labels: [],
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 350
        },
        legend: {
          fontSize: '13px',
          position: 'bottom',
          itemMargin: {
            horizontal: 4,
            vertical: 6
          }
        }
      }
    }
  ],
  tooltip: {
    y: {
      formatter: function(value) {
        return new Intl.NumberFormat('es-CR', {
          style: 'currency',
          currency: 'CRC'
        }).format(value)
      }
    },
    style: {
      fontSize: '14px'
    }
  },
  dataLabels: {
    style: {
      fontSize: '15px'
    }
  },
  colors: [
    '#4facfe',
    '#00f2fe',
    '#43e97b',
    '#38f9d7',
    '#fa709a',
    '#fee140',
    '#f093fb',
    '#f5576c',
    '#667eea',
    '#764ba2'
  ],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  }
}
// Verde: 43e97b y 38f9d7 | Amarillo: f9d423 y ff4e50 | Rojo: c41432 y fc5a44
export {
  IncomeChart,
  ExpensesByPeriodChart,
  UtilityChart,
  CustomersChart,
  ExpensesByHeadquarterChart
}
