// Bar chart config
const BarChart = {
  chart: {
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
          year: 'numeric',
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
  dataLabels: { enabled: false },
  colors: ['#ff0000']
};

export { BarChart };
