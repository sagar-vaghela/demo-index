import React, { Component } from "react";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getItems } from "../actions";

import { ItemList } from "../components";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
    const { items } = this.props;
    const options = { paginationShowsTotal: true, exportCSVText: 'Download' };

    return (
        <div className="container-fluid main-container">
          <div className="row col-12">
            <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">

              <BootstrapTable
                  tableHeaderClass="tableHeaderClass"
                  data={items}  options={options}
                  striped hover ex pagination ignoreSinglePage
                  exportCSV csvFileName="items.csv"
              >
                <TableHeaderColumn isKey dataField="id" csvHeader="ID" tdStyle={{ whiteSpace: 'normal', cursor: 'pointer' }} thStyle={{ whiteSpace: 'normal' }}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="thumbnailUrl" csvHeader="Thumbnail Url" tdStyle={{ whiteSpace: 'normal', cursor: 'pointer' }} thStyle={{ whiteSpace: 'normal' }}>Thumbnail Url</TableHeaderColumn>
                <TableHeaderColumn dataField="title" csvHeader="Title" tdStyle={{ whiteSpace: 'normal', cursor: 'pointer' }} thStyle={{ whiteSpace: 'normal' }}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="url" csvHeader="URL" tdStyle={{ whiteSpace: 'normal', cursor: 'pointer' }} thStyle={{ whiteSpace: 'normal' }}>URL</TableHeaderColumn>

              </BootstrapTable>

                {/* {
                  items 
                    && items.map((item, index)=> {
                      return (
                        <ItemList key={index} item={item} />
                      )
                    })
                }         */}

            </main>
          </div>
        </div>
    );
  }

  componentDidMount = () => {
    this.props.getItems();
  };

}

const mapStateToProps = state => ({
  items: state.itemData.items,
});

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
