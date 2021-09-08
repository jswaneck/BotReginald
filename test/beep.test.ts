import * as Command from "../src/commands/beep"

let mockInteraction = {
    reply: jest.fn()
}

describe("beep tests", () => {

    beforeEach(() =>
        mockInteraction.reply.mockClear()
    );

    it('should exist', () => {
        expect(Command).toBeTruthy();
        expect(Command["data"]).toBeTruthy();
        expect(Command["execute"]).toBeTruthy();
    });

    it('should boop', () => {
        let command = Command["execute"] as (interaction:any) => Promise<any>;
        command(mockInteraction);
        expect(mockInteraction.reply).toHaveBeenCalledWith("Boop!");
    });
   })