import React, {Component} from 'react';
import style from './../styles/styles.less';

import DWChart from 'react-datawrapper-chart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {
    !function(){'use strict';window.addEventListener('message',(function(a){if(void 0!==a.data['datawrapper-height'])for(var e in a.data['datawrapper-height']){var t=document.getElementById('datawrapper-chart-'+e)||document.querySelector('iframe[src*="'+e+'"]');t&&(t.style.height=a.data['datawrapper-height'][e]+'px')}}))}();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <h1>Global Humanitarian Overview 2022</h1>
        <p>Dataset: UN Office for the Coordination of Humanitarian Affairs. All the data is public and suitable to use. All charts are under strict embargo until 2 December 06:00 CET.</p>
        <div>
          <h3>Section one: Global trends</h3>
          <div>
            <h4>Evolution of climate-related disasters (1945-2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/7A5wn/8/" />
            <h4>Vulnerability to climate change (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/JIZEm/10/" />
            <h4>Food insecurity levels (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/C5oIo/2/" />
            <h4>Food Price Index (2003-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/0aMLs/4/" />
            <h4>Casualties from explosive arms (2019-2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/3FdnW/3/" />
            <h4>Aid worker security incidents (2010–2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/F71l2/3/" />
            <h4>Humanitarian access constraints (2018-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/O1N8x/5/" />
            <h4>Recorded COVID-19 cases and deaths, HRP countries (2020-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/lbos7/3/" />
            <h4>COVID-19 vaccine rollout, HRP countries (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/mj17s/4/" />
            <h4>Forcibly displaced people (2010-2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/b6yaK/3/" />
            <h4>Refugees by country of origin (2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/GLSm9/3/" />
            <h4>Countries with the largest populations of IDPs (2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/69jNF/4/" />
            <h4>Immunization coverage (2015-2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/J2mJX/3/" />
            <h4>Evolution of extreme poverty (2015–2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/SVmZA/4/" />
            <h4>Economic indicators in countries with HRPs (2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/HnhOn/2/" />
            <h4>Duration of school closures (2020-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/6ulLf/2/" />
            <h4>Children affected by school closures (2020-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/Vu59D/3/" />
            <h4>Female employment (2010-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/Q8ZJf/7/" />
            <h4>Gender Inequality Index (2020)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/fSXeL/4/" />
          </div>
        </div>
        <div>
          <h3>Section two: Inter-Agency Appeals</h3>
          <div>
            <h4>Inter-Agency Coordinated Appeals: Results from 2021</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/Yt0lG/11/" />
            <h4>Funding gap (2014-2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/HFzbc/14/" />
            <h4>Monthly evolution of funding coverage (2019 - 2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/WVUwZ/5/" />
            <h4>Inter-Agency Coordinated Appeals: Overview for 2022</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/8wGz5/6/" />
            <h4>Evolution of People in Need (2015-2022)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/D249G/8/" />
            <h4>Evolution of appeals by size of requirements (2016-2022)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/wkSxd/7/" />
            <h4>Inter-Agency Coordinated Appeals: Overview per region (2022)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/DTi2I/5/" />
            <h4>Afghanistan: Evolution of funding (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/AkQD2/4/" />
            <h4>Most underfunded HRPs (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/dq8UB/2/" />
          </div>
        </div>
        <div>
          <h3>Section three: Delivering Better</h3>
          <div>
            <h4>Allocations of Pooled Funds per country (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/67DXV/4/" />
            <h4>Top contributions to Pooled Funds (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/3kzRS/5/" />
            <h4>Allocations by Gender and Age Marker (2021)</h4>
            <DWChart title="" src="//datawrapper.dwcdn.net/HuBry/2/" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;