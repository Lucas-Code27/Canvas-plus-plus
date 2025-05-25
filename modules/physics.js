export function pointvpointcollision(x1,y1,x2,y2){
    if(x1 == x2 && y1 == y2){
        return true
    } else{
        return false
    }
}

export function pointvcirclecollision(px,py,cx,cy,r){ 
    // get distance between the point and circle's center
    // using the Pythagorean Theorem
    const distX = px - cx
    const distY = py - cy
    const distance = sqrt( (distX*distX) + (distY*distY) )

    if (distance <= r) {
      return true;
    }
    return false;
}

export function circlevcirclecollision(c1x,c1y,c1r,c2x,c2y,c2r){
    // get distance between the circle's centers
    // use the Pythagorean Theorem to compute the distance
    const distX = c1x - c2x
    const distY = c1y - c2y
    const distance = sqrt( (distX*distX) + (distY*distY) )

    if (distance <= c1r+c2r) {
      return true
    }
    return false
}

export function pointvrectcollision(px,py,rx,ry,rw,rh){
  if (px >= rx && px <= rx + rw && py >= ry && py <= ry + rh) {
        return true;
  }
  return false;
}

export function rectvrectcollision(r1x,r1y,r1w,r1h,r2x,r2y,r2w,r2h){
    if(r1x + r1w >= r2x && r1x <= r2x + r2w &&r1y + r1h >= r2y && r1y <= r2y + r2h){
        return true
    }
    else{
        return false
    }
}

export function circlevrectcollision(cx,cy,cr,rx,ry,rw,rh){
    // temporary variables to set edges for testing
    const testX = cx;
    const testY = cy;

    // which edge is closest?
    if (cx < rx)         testX = rx;      // left edge
    else if (cx > rx+rw) testX = rx+rw;   // right edge
    if (cy < ry)         testY = ry;      // top edge
    else if (cy > ry+rh) testY = ry+rh;   // bottom edge

    // get distance from closest edges
    const distX = cx-testX;
    const distY = cy-testY;
    const distance = sqrt( (distX*distX) + (distY*distY) );

    if (distance <= cr) {
      return true;
    }
    return false;
}