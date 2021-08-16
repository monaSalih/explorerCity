 <Modal show={this.state.showModal} onHide={this.handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  
                  <p> 
                City name : {this.state.distanceName}
                City Lat: { this.state.cityInfo.lat}
                City /Lan: {this.state.cityInfo.lan}

                  </p>
                  
              
                   
                {/* new TestBranch */}
            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleclose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal> 
 