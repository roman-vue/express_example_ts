;
import * as colors from 'colors'

  export const custom= (tokens, req, res) => {
    let status = tokens.status(req, res);
    let color = status >= 500 ? 'red' : status >= 300 ? 'yellow' : 'green'
    return [
      'ip: ' + colors.gray(tokens['remote-addr'](req, res)),
      'status: '+ colors[color](status),
      'path: ' + colors.blue(tokens['url'](req, res))
    ].join(' ');
  }
