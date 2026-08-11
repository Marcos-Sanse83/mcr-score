export function renderRoundForm(players) {
    return `
        <div class="container round-form">
            <div class="row g-2 mt-3">
                <div class="col-6">
                    <label class="form-label">Winner</label>
                    <select class="form-select">
                        <option selected>Select winner</option>
                        <option>${players[0]}</option>
                        <option>${players[1]}</option>
                        <option>${players[2]}</option>
                        <option>${players[3]}</option>
                        <option>None</option>
                    </select>
                </div>

                <div class="col-6">
                    <label class="form-label">Loser</label>
                    <select class="form-select">
                        <option selected>Select loser</option>
                        <option>${players[0]}</option>
                        <option>${players[1]}</option>
                        <option>${players[2]}</option>
                        <option>${players[3]}</option>
                        <option>Self-draw</option>
                    </select>
                </div>
            </div>

            <div class="text-center mt-3">
                <label class="form-label fw-bold">Hand points</label>
                <div class="input-group mx-auto" style="max-width: 180px;">
                    <button class="btn btn-secondary" type="button">−</button>
                    <input type="number" class="form-control text-center" value="0" aria-label="Hand points">
                    <button class="btn btn-secondary" type="button">+</button>
                </div>
            </div>

            <div class="mt-2">

                <div class="row text-center small text-secondary mb-1">
                    <div class="col-6 text-start"></div>
                    <div class="col-3">Hand</div>
                    <div class="col-3">Penalty</div>
                </div>


                <div class="row g-2 mb-2">
                    <div class="col-6">
                        <label class="form-label mb-0">Player 1</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control-plaintext text-center" value="0" readonly>
                    </div>

                    <div class="col-3">
                        <input type="number" class="form-control text-center" value="0">
                    </div>
                </div>

                <div class="row g-2 mb-2">
                    <div class="col-6">
                        <label class="form-label mb-0">Player 2</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control-plaintext text-center" value="0" readonly>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control text-center" value="0">
                    </div>
                </div>

                <div class="row g-2 mb-2">
                    <div class="col-6">
                        <label class="form-label mb-0">Player 3</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control-plaintext text-center" value="0" readonly>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control text-center" value="0">
                    </div>
                </div>

                <div class="row g-2">
                    <div class="col-6">
                        <label class="form-label mb-0">Player 4</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control-plaintext text-center" value="0" readonly>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control text-center" value="0">
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center p-1 flex-nowrap mt-4">
                <button type="button" class="btn btn-outline-danger m-2">Clear Round</button>
                <button type="button" class="btn btn-secondary m-2">Save Round</button>
            </div>
        </div>
    `;
}