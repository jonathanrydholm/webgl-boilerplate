import GLC from '../GLCommander';

class MouseListener {
    constructor(){
        this.onWheelListeners = [];
        this.onDragListeners = []
    }

    init = () => {
        let x = 0;
        let y = 0;
        let dragging = false;

        GLC.gl.canvas.onwheel = (e) => {
            this.onWheelListeners.forEach(listener => {
                listener.onWheel(e);
            })
        }

        GLC.gl.canvas.onmousedown = (e) => {
            x = e.clientX;
            y = e.clientY;
            dragging = true;
        }

        GLC.gl.canvas.onmouseup = () => {
            dragging = false;
        }

        GLC.gl.canvas.onmousemove = (e) => {
            if (dragging) {
                const dx = x - e.clientX;
                const dy = y - e.clientY;
                x = e.clientX;
                y = e.clientY;
                this.onDragListeners.forEach(listener => {
                    listener.onDrag(dx, dy);
                });
            }
        }
    }

    subscribeToDrag = (listener) => {
        this.onDragListeners.push(listener);
    }

    subscribeToWheel = (listener) => {
        this.onWheelListeners.push(listener)
    }
}

const MouseEvent = new MouseListener();
export default MouseEvent;