import numpy as np
import torch

import utils


def sigmoid(x, *, derivative=False):
    s = 1. / (1. + np.exp(-x))
    if derivative:
        return s * (1. - s)
    return s


class NumpyModel:
    def __init__(self, hidden_size=10):
        self.W1 = np.random.normal(0, 1, [2, hidden_size])
        self.W2 = np.random.normal(0, 1, [hidden_size, 1])

    def forward(self, x):
        self.inp = x
        self.hidden_inp = sigmoid(x @ self.W1)
        return sigmoid(self.hidden_inp @ self.W2)

    def backward(self, dout):
        d = sigmoid(self.hidden_inp @ self.W2, derivative=True) * dout
        self.dW2 = self.hidden_inp.T * d
        # and so on...


def sigmoid2(x):
    return 1 / (1 + torch.exp(-x))


class TorchModel:
    def __init__(self, hidden_size=10):
        self.W1 = torch.randn(2, hidden_size).double()
        self.W2 = torch.randn(hidden_size, 1).double()

    def forward(self, x):
        return sigmoid2(sigmoid2(x @ self.W1) @ self.W2)


if __name__=="__main__":
    np_model = NumpyModel(10)
    torch_model = TorchModel(10)
    
    # Copy the same data
    torch_model.W1 = torch.from_numpy(np_model.W1)
    torch_model.W2 = torch.from_numpy(np_model.W2)
    torch_model.W2.requires_grad = True

    x, y = utils.sample_a_data_point()

    out = np_model.forward(x)
    print(out)

    out = torch_model.forward(torch.from_numpy(x))
    print(out)


    # Do some training
    for _ in range(1):
        x, y = utils.sample_a_data_point()

        out = np_model.forward(x)
        loss = (out - y) ** 2
        dout = 2 * (out - y)
        np_model.backward(dout)
        print(np_model.dW2)

        out = torch_model.forward(torch.from_numpy(x))
        loss = (out - float(y)) ** 2
        loss.backward()
        print(torch_model.W2.grad)

